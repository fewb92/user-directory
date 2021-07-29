import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Table() {

    const [employeeList, setEmployeeList] = useState([])

    useEffect(() => {
        axios
            .get('https://randomuser.me/api/?results=100&nat=us')
            .then((res) => {
                console.log(res)
                const employeeNames = res.data.results.map((results) => {
                    return (results.name.first + " " + results.name.last)
                })
                console.log(employeeNames)
                const employeePhones = res.data.results.map((results) => {
                    return (results.cell)
                })
                console.log(employeePhones)
                const employeeGender = res.data.results.map((results) => {
                    return (results.gender)
                })
                console.log(employeeGender)
                const employeeLocation = res.data.results.map((results) => {
                    return (results.location.city)
                })
                console.log(employeeLocation)

                var fullUserInfoArray = [{}];
                for (var i = 0; i < employeeNames.length; i++) {
                    var id = employeeNames[i];
                    var count = employeePhones[i];
                    if (fullUserInfoArray[id] === undefined) {
                        fullUserInfoArray[id] = count;
                    } else {
                        fullUserInfoArray[id] += count;
                    }
                }
                console.log(fullUserInfoArray)
            })
    })

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Location</th>
                    <th scope="col">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}
