
function Footer() {
    return (
        <footer className="backdrop-blur-[20px] p-2 max-w-full">
            <hr className="my-5" />
            <div className="flex justify-center items-center">
                <p>&copy; {new Date().getFullYear()} D. Dey</p>
            </div>
        </footer>
    );
}

export default Footer;
