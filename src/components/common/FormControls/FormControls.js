import styles from './FormControls.module.css'

export const FormControl = ({input, meta, children}) =>{
    const someError = meta.touched && meta.error
    return(
        <div className={styles.formControl + " " + (someError ? styles.error : "")} >
            <div>
                {children}
            </div>
            {someError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props) =>{
    const {input, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) =>{
    const {input, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}