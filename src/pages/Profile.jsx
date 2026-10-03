function Profile() {
  return (
    <section className="page">
      <div className="page-header">
        <span className="section-label">ACCOUNT</span>

        <h1>User Profile</h1>

        <p>Manage your ABC Store account information.</p>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">👤</div>

        <div className="profile-info">
          <h2>ABC Customer</h2>

          <p>Email: customer@example.com</p>

          <p>Location: Kayonza, Rwanda</p>

          <button className="primary-button">
            Edit Profile
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;