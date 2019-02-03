import React, { Component } from 'react'
import { Typography, Card, Button } from '@material-ui/core'

class GodCard extends Component{
    constructor(props){
        super(props)
    }

    getGodInfo = async () => {
        const response = await fetch(`localhost:5000/god/${this.props.godID}`)
        const body = await response.json()

        if (response.status !== 200){
            console.log(body.message)
        }
        return body
    }

    openAddModal() {
        
    }

    render(){
        return(
            <div>
                <Card raised={true} className="godPaper">
                    {this.getGodInfo}
                </Card>
                <Button variant="contained" color="primary" className="m" onClick={this.openAddModal}>
                    Add New God
                </Button>
            </div>
        )
    }
}

export default GodCard