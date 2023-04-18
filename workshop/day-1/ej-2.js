function getPhoneFromFn({ user }) {
  if (user && user.info && user.info.phone) {
    return user.info.phone;
  } else {
    return 'Sin telefono';
  }
}

const results = getPhoneFromFn({
  user: {
    info: {
      phone: '123456789',
    },
  },
});

console.log({ results });
