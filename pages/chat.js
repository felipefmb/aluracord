import { useRouter } from 'next/router'

export default function Chat() {
    
    const router = useRouter();
    
    return(        
        <>        
        <h1>Meu chat</h1>
        <form onSubmit={function(event) {
            event.preventDefault()
        }}>
            <input
            type='submit'
            value='Voltar'
            onClick={function(event) {
                router.back()
            }}
            ></input>
        </form>
        </>
    )
}