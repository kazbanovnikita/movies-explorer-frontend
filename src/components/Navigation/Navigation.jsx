import './Navigation.css'
function Navigation ({ children, className}){
    return(
        <nav className={`navigation ${className ?? ''}`}>
            {children}
        </nav>
    );
};

export default Navigation;