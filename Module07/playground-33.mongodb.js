db.users.aggregate([
  {
    $group: {
      _id: null, maxAge: { $max: '$age' },
      minAge: { $min: '$age' }
    }
  }
])