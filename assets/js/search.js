// Simple client-side search
(function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (!searchInput || !searchResults) return;

  // Page data for search
  const pages = [
    {
      title: 'TOEIC Structure & Overview',
      url: '/TOEIC-STRUCTURE.html',
      keywords: ['structure', 'format', 'test', 'overview', 'listening', 'reading']
    },
    {
      title: 'TOEIC Preparation Guide',
      url: '/TOEIC-PREPARATION-GUIDE.html',
      keywords: ['preparation', 'guide', 'schedule', 'strategy', 'tips']
    },
    {
      title: 'Listening Tips',
      url: '/LISTENING-TIPS.html',
      keywords: ['listening', 'part 1', 'part 2', 'part 3', 'part 4', 'photographs', 'conversations']
    },
    {
      title: 'Reading Tips',
      url: '/READING-TIPS.html',
      keywords: ['reading', 'part 5', 'part 6', 'part 7', 'comprehension', 'incomplete sentences']
    },
    {
      title: 'Complete Tenses Guide',
      url: '/TENSES-COMPLETE.html',
      keywords: ['tenses', 'grammar', 'past', 'present', 'future', 'continuous', 'perfect']
    },
    {
      title: 'Complete Grammar',
      url: '/GRAMMAR-COMPLETE.html',
      keywords: ['grammar', 'noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition']
    },
    {
      title: 'Advanced Grammar',
      url: '/ADVANCED-GRAMMAR.html',
      keywords: ['advanced', 'grammar', 'conditionals', 'passive voice', 'reported speech']
    },
    {
      title: 'TOEIC Vocabulary',
      url: '/VOCABULARY-TOEIC.html',
      keywords: ['vocabulary', 'words', 'business', 'terms', 'idioms', 'expressions']
    },
    {
      title: 'Quick Reference',
      url: '/QUICK-REFERENCE.html',
      keywords: ['reference', 'cheatsheet', 'tips', 'mistakes', 'time management']
    },
    {
      title: 'Grammar Quiz',
      url: '/quizzes/grammar-quiz.html',
      keywords: ['quiz', 'practice', 'test', 'grammar']
    },
    {
      title: 'Vocabulary Quiz',
      url: '/quizzes/vocabulary-quiz.html',
      keywords: ['quiz', 'practice', 'test', 'vocabulary']
    },
    {
      title: 'Listening Quiz',
      url: '/quizzes/listening-quiz.html',
      keywords: ['quiz', 'practice', 'test', 'listening']
    }
  ];

  let searchTimeout;

  searchInput.addEventListener('input', function(e) {
    clearTimeout(searchTimeout);
    const query = e.target.value.toLowerCase().trim();

    if (query.length < 2) {
      searchResults.classList.remove('show');
      return;
    }

    searchTimeout = setTimeout(() => {
      const results = searchPages(query);
      displayResults(results);
    }, 300);
  });

  function searchPages(query) {
    return pages.filter(page => {
      const titleMatch = page.title.toLowerCase().includes(query);
      const keywordMatch = page.keywords.some(keyword => keyword.includes(query));
      return titleMatch || keywordMatch;
    }).slice(0, 10); // Limit to 10 results
  }

  function displayResults(results) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
    } else {
      searchResults.innerHTML = results.map(result => `
        <div class="search-result-item" onclick="window.location.href='${result.url}'">
          <div class="search-result-title">${result.title}</div>
        </div>
      `).join('');
    }
    searchResults.classList.add('show');
  }

  // Close search results when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.remove('show');
    }
  });

  // Close search results on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      searchResults.classList.remove('show');
      searchInput.blur();
    }
  });
})();
