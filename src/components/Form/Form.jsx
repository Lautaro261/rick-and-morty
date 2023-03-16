export default function Form(){

    return(
         <Form>
            <label htmlFor="username"></label>
            <input type='text' name='username'/>
            <label htmlFor="password"></label>
            <input type='text' name='password'/> {/* luego cambiar type='password' bc749*/}
            <button type="submit">Login</button>
        </Form>
    )
}