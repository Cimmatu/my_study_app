import styles from './FormControls.module.css'

export const FormControl = ({input, meta: {touched, error}, children}) =>{
    const someError = touched && error
    return(
        <div className={styles.formControl + " " + (someError ? styles.error : "")} >
            <div>
                {children}
            </div>
            {someError && <span>{error}</span>}
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