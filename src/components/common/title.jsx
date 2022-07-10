const Title = ({ title, className }) => {
    return (
        <div className={`text-5xl md:text-7xl font-bold text-white text-center ${className}`}>{title}</div>
    )
}

export default Title