import React from 'react';
import { DnFC } from '@designable/react';
import { Form as LoginFormInput} from '@formily/antd';
import { createBehavior, createResource } from '@designable/core';
import { createFieldSchema } from '../Field';
import { AllSchemas } from '../../schemas';
import { AllLocales } from '../../locales';

export const LoginForm: DnFC<React.ComponentProps<typeof LoginFormInput>>=
  LoginFormInput

LoginForm.Behavior=createBehavior(
  { 
    name: 'LoginFormInput',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'LoginFormInput',
  }
)

LoginForm.Resource=createResource({
  icon:'InputSource',
  elements:[
    {
      componentName: 'Field',
      props:{
        type: 'string',
        title: 'LoginFormInput',
        'x-decoraotr':'FormItem',
        'x-component': 'Input',
      }
    }
  ]
})