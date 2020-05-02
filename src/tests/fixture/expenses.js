import moment from 'moment';

export default [{
    id:1,
    description: 'Rent',
    note: 'New Rent',
    amount: 3,
    createdAt: 0
},
{
    id:2,
    description: 'Bill',
    note: 'New Rent Bill',
    amount: 2365,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id:3,
    description: 'Water billl',
    note: 'New water',
    amount: 25,
    createdAt: moment(0).add(4, 'days').valueOf()
}]
