export const loginAction = async ({ request, params }) => {
  const data = await request.formData();
  const updates = Object.fromEntries(data);
  console.log(updates);
  return params;
};

export const registerAction = async ({ request, params }) => {
  const data = await request.formData();
  const updates = Object.fromEntries(data);
  console.log(updates);
  return params;
};
