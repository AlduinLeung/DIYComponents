import React from 'react';
import classNames from 'classnames'
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?:string,
}

//intersection 联合类型  a & b == 既有a类型也有b类型
//partial<T>  construts a type with all properties of T set to optional
type NativeButtonProps=BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnChorButtonProps= BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export  type ButtonProps= Partial<NativeButtonProps  &  AnChorButtonProps>



const Button: React.FC<ButtonProps> = (props) => {
  const { 
    btnType,
     disabled, 
     size, 
     className,
     children ,
     href,
     ...restProps
    } = props; 
    //btn. btn-lg ,btn-primary
    let classes=classNames('btn',className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType === ButtonType.Link) && disabled
    });
    if(btnType ===ButtonType.Link && href) {
        return (
        <a
        {...restProps}
        className={classes}
        href={href}
        >{children}</a>
        )
    }else{
      return (
        <button
        {...restProps}
        className={classes}
        disabled={disabled}
        >
          {children}
        </button>
      )
    }
};
Button.defaultProps={
  disabled:false,
  btnType: ButtonType.Default
}

export default Button
