import user from "./user.json";

export default function UserCard({ name, phoneNumber, age, address }) {
  return (
    <div class="card">
      <h2 class="name">{user.name}</h2>
      <div class="body">
        <div class="label">Age:</div>
        <div>{user.age}</div>
        <div class="label">Phone:</div>
        <div>{user.phoneNumber}</div>
        <div class="label">Address:</div>
        <div>{user.address}</div>
      </div>
    </div>
  );
}
