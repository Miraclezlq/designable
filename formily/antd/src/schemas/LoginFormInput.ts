import { ISchema } from "@formily/react";

export const LoginFormInput: ISchema={
  type:'object',
  properties:{
    username:{
      title: '用户名',
      "x-decorator": 'FormItem',
      "x-component": 'Input'
    }
  }
}