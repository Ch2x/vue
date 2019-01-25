/* @flow */

import {
  isPreTag,
  mustUseProp,
  isReservedTag,
  getTagNamespace
} from '../util/index'

import modules from './modules/index'
import directives from './directives/index'
import { genStaticKeys } from 'shared/util'
import { isUnaryTag, canBeLeftOpenTag } from './util'

export const baseOptions: CompilerOptions = {
  expectHTML: true,
  modules,  //[klass,style,model]
  directives,  //{model,text,html}
  isPreTag,
  isUnaryTag, //是否一元标签
  mustUseProp,
  canBeLeftOpenTag,
  isReservedTag,
  getTagNamespace,
  staticKeys: genStaticKeys(modules)
}
