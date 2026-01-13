const FooterList = ({ title, items }) => {
    return (
        <div>
            <h3 className="text-lg font-semibold text-white mb-4">
                {title}
            </h3>

            <ul className="space-y-2">
                {items.map((item, i) => (
                    <li key={i}>
                        <a
                            className="
                                text-sm text-[var(--blueLight)]
                                hover:text-[var(--accent)]
                                transition
                                cursor-pointer
                            "
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterList;