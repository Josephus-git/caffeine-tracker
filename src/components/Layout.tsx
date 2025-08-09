

export default function Layout(props: any) {
    const { children } = props

    const header = (
        <header>

        </header>
    )

    const footer = (
        <footer></footer>
    )

    return (
        <>
            {header}
            <main>
                {children}
            </main>           
            {footer}
        </>
    )
}