function Popup() {
    var e = document.getElementById("fontID");
    var value = e.value();
    var text = e.options[e.selectedIndex].text();


    return(
        <div className="Popup">
        </div>
    );
}

export default Popup