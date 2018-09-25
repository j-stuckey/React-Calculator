import React from 'react';
import styles from './styles/App.module.css';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            total: 0
        }
    }

    fb() {
        this.setState({
            total: this.state.total + 1
        })
    }

    render() {

        return (
            <main>
                <p>{this.state.total}</p>
                <button className={styles.button} onClick={() => this.fb()}>1</button>
                <button className={styles.button}>2</button>
                <button className={styles.button}>3</button>
            </main>
        )

    }
}

export default App;
