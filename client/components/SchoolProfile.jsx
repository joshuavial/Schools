import React from 'react'
import * as api from '../api'
import GMap from './GMap'

export default class SchoolProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            school: {},
            id: props.match.params.id,
            coord: {}
        }
    }

componentDidMount () {
   api.getSchool(this.state.id,(err, school) => this.renderProfile(err, school))
}

renderProfile (err, school) {
    this.setState({
        error: err,
        school: school || {},
        coord: {lat: school.latitude, lng: school.longitude}
    })

}

render () {
    return (
         <div className='school'>
            <div>
                <h1>School Profile</h1>
                    <ul>
                        <li>Name : {this.state.school.name}</li>
                        <li>School Type : {this.state.school.schoolType}</li>
                        <li>Authority : {this.state.school.authority}</li>
                        <li>Gender : {this.state.school.gender}</li>
                        <li>Decile : {this.state.school.decile}</li>
                        <li>Address : {this.state.school.address}</li>
                        <li>Suburb : {this.state.school.suburb}</li>
                        <li>Email : {this.state.school.email}</li>
                        <li>Website : <a href={this.state.school.url}>{this.state.school.url}</a></li>
                    </ul>
            </div>
            <div className='map'>
                <GMap  center={this.state.coord}/>
            </div>
        </div>
    )
}
}
