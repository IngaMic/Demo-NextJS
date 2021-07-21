const UserProfilePage = () => {
    return <div>{props.username}</div>;
};

export default UserProfilePage;

export async function getServerSideProps(context) {
    const { params, req, res } = context;

    return {
        props: {
            username: "Inge",
        },
    };
}
