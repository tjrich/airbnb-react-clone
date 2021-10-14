function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10
                        px-32 py-14 bg-gray-100 text-gray-600">
            
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>News room</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>Its a pretty awesome clone</p>
                <p>Available to freelance</p>
                <p className="text-blue-700 hover:scale-105 hover:text-bold"><a href="https://trich.bss.design">trich</a></p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>Hosting</p>
                <p>Super host</p>
                <p>Middle host</p>
                <p>Nomal host</p>
                <p>Little host</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Get support</p>
                <p>Lost keys</p>
                <p>Missing room</p>
                <p>Low oxygen support</p>
                <p>Brick foundation</p>
            </div>
        </div>
    )
}

export default Footer
