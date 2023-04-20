const getPhoneFromFn = ({ user }) => user?.info?.phone || 'Sin telefono';

const results = getPhoneFromFn({
  user: {
    info: {
      phone: '   ',
    },
  },
});

console.log({ results });
