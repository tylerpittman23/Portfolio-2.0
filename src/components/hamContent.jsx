function HamContent(props) {
    const { links } = props;

    const linkClickHandler = (id) => {
        const section = document.getElementById(id);
        if (section) {
            return () => section.scrollIntoView({ behavior: 'smooth' });
        }
        return () => console.log(id)
    }

    return (
        <>
        <div className="ham-menu-content">
            {links.map((link) => {
                return  <button 
                            key={link.id}
                            onClick={linkClickHandler(link.id)}
                            >
                            <svg 
                                xmlns={link.xmlns} 
                                viewBox={link.viewBox}>
                                <path 
                                    d={link.d}>
                                </path>
                            </svg>
                            {link.content}
                        </button>
            })}
        </div>
        </>
    )
}

export default HamContent;