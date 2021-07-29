import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Table() {

    const [employeeList, setEmployeeList] = useState([])

    const fetch = () => {
        axios
            .get('https://randomuser.me/api/?results=100&nat=us')
            .then((res) => {
                console.log(res)
                const employeeNames = res.data.results.map((results) => {
                    return (results.name.first + " " + results.name.last)
                })
                const employeePhones = res.data.results.map((results) => {
                    return (results.cell)
                })
                const employeeGender = res.data.results.map((results) => {
                    return (results.gender)
                })
                const employeeLocation = res.data.results.map((results) => {
                    return (results.location.city)
                })
                const employeeImage = res.data.results.map((results) => {
                    return (results.picture.thumbnail)
                })
                var items = employeeNames.map((id, index) => {
                    return {
                        id: id,
                        image: employeeImage[index],
                        name: employeeNames[index],
                        location: employeeLocation[index],
                        gender: employeeGender[index],
                        phone: employeePhones[index],
                    }
                });

                console.log(items)
                setEmployeeList(items)
            })
    }

    useEffect(() => {
        fetch()
    }, [])

    console.log(employeeList)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Location</th>
                    <th scope="col">Phone Number</th>
                    </tr>
                </thead>
                {employeeList.map((data, i) => {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{i + 1}</th>
                                <td>
                                <img NameName="logos" src={data.image} alt="" />
                                </td>
                                <td>{data.name}</td>
                                <td>{data.gender}</td>
                                <td>{data.location}</td>
                                <td>{data.phone}</td>
                            </tr>
                            </tbody>
                    );
                })}
                </table>
        </div>
    )
}
