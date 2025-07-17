export const clubs = [
  { id: 'club-1', name: 'Tech Geeks', instaId: 'techgeeks', logo: 'https://via.placeholder.com/150', type: 'Tech' },
  { id: 'club-2', name: 'Literary Circle', instaId: 'litcircle', logo: 'https://via.placeholder.com/150', type: 'Non-Tech' },
  { id: 'club-3', name: 'Art Club', instaId: 'artclub', logo: 'https://via.placeholder.com/150', type: 'Non-Tech' },
  { id: 'club-4', name: 'Code Wizards', instaId: 'codewizards', logo: 'https://via.placeholder.com/150', type: 'Tech' },
];

export const events = [
  { id: 'event-1', clubId: 'club-1', name: 'Hackathon 2025', description: 'A 24-hour coding competition.', venue: 'Auditorium', date: '2025-08-15', timing: '9:00 AM - 9:00 PM', type: 'Tech', socialProof: '50+ people registered!'},
  { id: 'event-2', clubId: 'club-2', name: 'Poetry Slam', description: 'An evening of beautiful poetry.', venue: 'Library Hall', date: '2025-08-20', timing: '6:00 PM - 8:00 PM', type: 'Non-Tech', socialProof: 'Join 30+ poetry lovers!'},
  { id: 'event-3', clubId: 'club-3', name: 'Art Exhibition', description: 'Showcasing the best art from our students.', venue: 'Art Gallery', date: '2025-09-01', timing: '10:00 AM - 6:00 PM', type: 'Non-Tech', socialProof: 'Free entry for all!'},
  { id: 'event-4', clubId: 'club-4', name: 'Intro to AI/ML', description: 'A workshop for beginners in AI.', venue: 'Room 404', date: '2025-09-05', timing: '2:00 PM - 4:00 PM', type: 'Tech', socialProof: 'Limited seats available.'},
  { id: 'event-5', clubId: 'club-1', name: 'Web Dev Workshop', description: 'Learn the basics of modern web development.', venue: 'Computer Lab 1', date: '2025-08-25', timing: '10:00 AM - 1:00 PM', type: 'Tech', socialProof: '15 spots left!'},
];

export const posts = [
    { id: 'post-1', clubId: 'club-1', title: 'Recap: Hackathon 2025', content: 'It was a huge success! Thanks to all who participated.', date: '2025-08-16' },
    { id: 'post-2', clubId: 'club-2', title: 'Winning Poems from the Slam', content: 'Here are the winning entries from our latest poetry slam.', date: '2025-08-21' },
];