import React from 'react';
import Layout from './Layout';

function Students() {
    return (
        <Layout>
            <div className="table_container">
                <div className="student_page_head">
                    <h1>Students details</h1>
                    <button className='add_btn'>Add New Student</button>
                </div>

                <table>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Course</td>
                        <td>Batch</td>
                        <td>Change</td>
                    </tr>
                    <tr>
                        <td>Akash</td>
                        <td>24</td>
                        <td>MERN</td>
                        <td>October</td>
                        <td><a href="/students">Edit</a></td>
                    </tr>
                    <tr>
                        <td>Dinesh</td>
                        <td>23</td>
                        <td>MERN</td>
                        <td>September</td>
                        <td><a href="/students">Edit</a></td>
                    </tr>
                    <tr>
                    <td>Bikash</td>
                        <td>25</td>
                        <td>MERN</td>
                        <td>December</td>
                        <td><a href="/students">Edit</a></td>
                    </tr>
                    <tr>
                    <td>Deb</td>
                        <td>21</td>
                        <td>MERN</td>
                        <td>January</td>
                        <td><a href="/students">Edit</a></td>
                    </tr>
                </table>
            </div>
        </Layout>
    )
}

export default Students;