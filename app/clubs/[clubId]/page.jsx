import { clubs, posts } from '@/lib/mock-data';

export default function ClubDetailsPage({ params }) {
  const club = clubs.find(c => c.id === params.clubId);
  const clubPosts = posts.filter(p => p.clubId === params.clubId);

  if (!club) {
    return <div>Club not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <img src={club.logo} alt={`${club.name} logo`} className="w-24 h-24 rounded-full mr-6" />
        <div>
          <h1 className="text-4xl font-bold">{club.name}</h1>
          <a href={`https://instagram.com/${club.instaId}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            @{club.instaId}
          </a>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
      <div className="space-y-6">
        {clubPosts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">by {club.name} on {post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}