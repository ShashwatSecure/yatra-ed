import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ContactForm from '@/components/ContactForm';

export default function CollegePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch(`/api/college/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          setCollege(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Failed to fetch college data:', err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading College Info...</div>;
  }

  if (!college) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>College Not Found</div>;
  }

  return (
    <div className="college-page">
      <div className="cover-photo">
        <img src={college.coverImage || '/default-cover.jpg'} alt="College Cover" className="cover-img" />
        <div className="overlay">
          <h1 className="college-name">{college.name || 'College Name'}</h1>
        </div>
      </div>

      <section className="about">
        <h2>About</h2>
        <p>{college.about || 'No description available.'}</p>
      </section>

      
      {(college.placements_highest || college.placements_average) && (
        <section className="placements">
          <h2>Placements Record</h2>
          <div className="placement-cards">
            {college.placements_highest && (
              <div className="card">
                <h3>Highest Package</h3>
                <p>{college.placements_highest}</p>
              </div>
            )}
            {college.placements_average && (
              <div className="card">
                <h3>Average Package</h3>
                <p>{college.placements_average}</p>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="fee">
        <h2>Fee Structure</h2>
        {Array.isArray(college.fee) && college.fee.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Fee</th>
                <th>Eligibility</th>
                <th>Application Date</th>
              </tr>
            </thead>
            <tbody>
              {college.fee.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.course}</td>
                  <td>{item.fee}</td>
                  <td>{item.eligibility}</td>
                  <td>{item.applicationDate || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No fee details available.</p>
        )}
      </section>

      <section className="talk-expert">
        <h2>Shape your future with us — Reach out now!</h2>
        <ContactForm></ContactForm>
      </section>

      <style jsx>{`
        .college-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .cover-photo {
          position: relative;
          width: 100%;
          height: 60vh;
          overflow: hidden;
        }
        .cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.6);
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .college-name {
          color: #fff;
          font-size: 3.5rem;
          font-weight: bold;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
        }
        h2 {
          text-align: center;
          color: #231F41;
          margin-top: 40px;
          font-size: 2rem;
          font-weight: 700;
        }
        .about, .gallery, .placements, .fee, .talk-expert {
          padding: 30px 20px;
          max-width: 1200px;
          margin: auto;
        }
        .about p {
          font-size: 18px;
          line-height: 1.6;
          color: #555;
        }
        .gallery-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
        .gallery img {
          width: 45%;
          border-radius: 15px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }
        .gallery img:hover {
          transform: scale(1.05);
        }
        .placement-cards {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 20px;
          flex-wrap: wrap;
        }
        .card {
          background: #fff9c4;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          width: 200px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        .fee table {
          width: 100%;
          margin-top: 20px;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ccc;
          padding: 12px;
          text-align: center;
          background: #fafafa;
        }
        th {
          background: #231F41;
          color: #fff;
        }
        .talk-expert {
          text-align: center;
          margin-top: 50px;
        }
        .whatsapp-btn {
          display: inline-block;
          margin-top: 10px;
          background-color: #25d366;
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: bold;
          transition: background-color 0.3s;
        }
        .whatsapp-btn:hover {
          background-color: #1ebea5;
        }
      `}</style>
    </div>
  );
}