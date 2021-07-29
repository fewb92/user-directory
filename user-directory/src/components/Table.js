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
            })
    })

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
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
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}
