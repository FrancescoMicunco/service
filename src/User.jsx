import { useLoaderData } from "react-router-dom";



export default function User() {
    const { users } = useLoaderData()

    return (
        <div id="contact">
            <div>
                <ul>
                    {
                        users.users.map((user) => (
                            <li key={user.id}>{user.username}</li>
                        ))
                    }
                </ul>
                {/* <img
                    key={user?.avatar}
                    src={user?.avatar || null}
                /> */}
            </div>

            {/* <div>
                <h1>
                    {user?.first || user?.last ? (
                        <>
                            {user?.first} {user?.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}

                </h1>


                {user?.notes && <p>{user?.notes}</p>}


            </div> */}
        </div>
    )
}