  // 暗黑模式切换
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // 初始化主题
  if (prefersDarkScheme.matches) {
      document.body.setAttribute('data-theme', 'dark');
  }

  themeToggle.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      if (currentTheme === 'dark') {
          document.body.removeAttribute('data-theme');
      } else {
          document.body.setAttribute('data-theme', 'dark');
      }
  });