function Footer() {

    const goToPage = (link) => {
        return () => {
        window.open(link, '_blank');
        }
    }

    const links = [
        {
            content: 'Github',
            href: 'https://github.com/tylerpittman23',
        },
        {
            content: 'LinkedIn',
            href: 'https://www.linkedin.com/in/tyler-pittman-6a4105211/',

        },
        {
            content: 'Stack Overflow',
            href: 'https://stackoverflow.com/users/22719936/tyler-pittman',

        },
        {
            content: 'LeetCode',
            href: 'https://leetcode.com/psiko23/'

        }
    ];

    return(
        <>
        <div className="footer">
            {links.map((link) => {
                return (
                <button 
                    key={link.content}
                    onClick={goToPage(link.href)}
                >
                    <span>{link.content}</span>
                </button>
                )
            })}
        </div>
        </>
    )
}

export default Footer;