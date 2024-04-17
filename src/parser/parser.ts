import {parse, ParserOptions} from '@babel/parser'
import traverse from '@babel/traverse'
import {Identifier, SourceLocation} from '@babel/types'

const parentTokens = ['each']
const testTokens = ['suite', 'describe', 'context', 'it', 'specify', 'test']

declare module '@babel/types' {
  interface SourceLocation {
    identifierName: string | null | undefined
  }
}

type TestLocation = {
  loc: SourceLocation
  title: string
}

export function parseSourceCode(sourceCode: string) {
  const parserOptions: ParserOptions = {
    plugins: [
      'typescript',
      ['decorators', {decoratorsBeforeExport: false}],
      'classPrivateMethods',
      'classPrivateProperties',
      'topLevelAwait',
      'jsx'
    ],
    sourceType: 'module'
  }

  const ast = parse(sourceCode, parserOptions)

  const result: TestLocation[] = []
  traverse(ast, {
    CallExpression: p => {
      const node = p.node
      let identifier: Identifier | undefined
      let replacePlaceHolder = false
      if (node.callee.type === 'Identifier' && testTokens.includes(node.callee.name)) {
        // Callee is a direct call to a test function
        identifier = node.callee
      } else if (node.callee.type === 'MemberExpression') {
        //
        if (
          node.callee.property.type === 'Identifier' &&
          testTokens.includes(node.callee.property.name)
        ) {
          // Callee seems to be a test function. Check if known parent object
          // is present
          if (
            node.callee.object.type === 'CallExpression' &&
            node.callee.object.callee.type === 'Identifier' &&
            parentTokens.includes(node.callee.object.callee.name)
          ) {
            identifier = node.callee.object.callee
            replacePlaceHolder = true
          } else if (
            node.callee.object.type === 'TaggedTemplateExpression' &&
            node.callee.object.tag.type === 'Identifier' &&
            parentTokens.includes(node.callee.object.tag.name)
          ) {
            identifier = node.callee.object.tag
            replacePlaceHolder = true
          }
        }
      }

      if (identifier !== undefined && identifier.loc !== undefined && identifier.loc !== null) {
        const loc = identifier.loc
        const args = node.arguments
        args.forEach(a => {
          if (a.type === 'StringLiteral') {
            result.push({
              loc,
              title: replacePlaceHolder
                ? // eslint-disable-next-line no-useless-escape
                  a.value.replace(/(\$\{[^\}]*\})|(\$[^ ]*)/g, '.*')
                : a.value
            })
          }
        })
      }
    }
  })
  return result
}
