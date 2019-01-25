/* @flow */

import { baseOptions } from './options'   //CompilerOptions
import { createCompiler } from 'compiler/index'

const { compile, compileToFunctions } = createCompiler(baseOptions)

export { compile, compileToFunctions }
