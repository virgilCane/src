import { NextPage } from "next";


const Chores: NextPage = () =>{

    return(
        <main className="w-100 chores-page">
            <div className="chores">
                {/* Day */}
                <div className="column-wrapper">
                    <div className="column-header">
                       <h2>Daily</h2>
                    </div>  
                    <div className="column">
                        <ul>
                            <li>Foo</li>
                            <li>Foo</li>
                            <li>Foo</li>
                            <li>Foo</li>
                            <li>Foo</li>
                        </ul>
                    </div>
                </div>
                {/* Week */}
                <div className="column-wrapper">
                    <div className="column-header">
                        <h2>Weekly</h2>
                    </div>
                    <div className="column">
                        <ul>
                            <li>Foo</li>
                            <li>Foo</li>
                            <li>Foo</li>
                            <li>Foo</li>
                            <li>Foo</li>
                        </ul>
                    </div>
                </div>
                {/* Month */}
                <div className="column-wrapper">
                    <div className="column-header">
                        <h2>Monthly</h2>
                    </div>
                    <div className="column">
                        <ul>
                            <li>Foo</li>
                            <li>Foo</li>
                            <li>Foo</li>
                            <li>Foo</li>
                            <li>Foo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Chores;