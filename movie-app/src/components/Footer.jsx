function Footer() {

    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {year}</p>
            <p>Built with ❤️ using React</p>
        </footer>
    )
}

export default Footer;