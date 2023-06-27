import { Outlet, Link } from "react-router-dom";
import { getUsers } from './users'

export async function loader() {
    const users = await getUsers();
    return { users }
}

export default function Home() {
    return (
        <><div id="sidebar">
            <h1>React Router Users - loader test</h1>

            {/* <nav>
                {users.users.length ? (
                    <ul>
                        {users.users.map((user) => (
                            <li key={user.id}>
                                <Link to={`users/${user.id}`}>
                                    {user.email || user.username ? (
                                        <>
                                            {user.email} {user.username}
                                        </>
                                    ) : (
                                        <i>No Name</i>
                                    )}
                                    {user.favorite && <span>★</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>
                        <i>No users</i>
                    </p>
                )}
            </nav> */}

            <div>
                <form id="search-form" role="search">
                    <input
                        id="q"
                        aria-label="Search contacts"
                        placeholder="Search"
                        type="search"
                        name="q"
                    />
                    <div
                        id="search-spinner"
                        aria-hidden
                        hidden={true}
                    />
                    <div
                        className="sr-only"
                        aria-live="polite"
                    ></div>
                </form>
                <form method="post">
                    <button type="submit">New</button>
                </form>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={`/user/1`}>Your Name</Link>
                    </li>
                    <li>
                        <Link to={`/user/2`}>Your Friend</Link>
                    </li>
                </ul>
            </nav>
        </div>

            <div id="detail">
                <Outlet />
            </div>
        </>

    )
}