export const createMembership = ( membership ) => {
    // console.log(membership);
    return $.ajax({
        method: "POST",
        url: "api/memberships",
        data: { membership }
    })
}

export const deleteMembership = ( membershipId ) => {
    return $.ajax({
        method: "POST",
        url: `api/memberships/${membershipId}`
    })
}

export const defaultMemberships = (userId) => {
    // console.log(userId);
    return createMembership({userId, channelId: 1})
        .then(createMembership({ userId, channelId: 2 }));
}