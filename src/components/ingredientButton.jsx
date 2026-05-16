function IngredientButton ({ active, className, onClick, children }) {
    return (
        <button
            onClick={onClick}
            className={`btn ${className} ${active ? 'active' : ''}`}
            >
            {children}
        </button>

    )
}

export default IngredientButton