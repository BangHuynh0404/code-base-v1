import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <h1>Main Layout</h1>,
    children: [
      {
        path: '/',
        element: <h1>Home</h1>,
      },
      {
        path: '/personal-info',
        element: <h1>personal-info</h1>,
      },
    ],
  },
]);

export default routes;
// const router = createBrowserRouter([
//    {
//      path: '/',
//      element: <h1>Root element</h1>,
//      errorElement: <h1>Error</h1>,
//      children: [
//        { index: true, element: <WelcomePage /> },
//        {
//          path: '/blog',
//          element: <BlogLayout />,
//          children: [
//            {
//              index: true,
//              element: <DeferredBlogPostsPage />,
//              loader: deferredBlogPostsLoader,
//            },
//            {
//              path: ':id',
//              element: <PostDetailPage />,
//              loader: blogPostLoader,
//            },
//          ],
//        },
//        {
//          path: '/blog/new',
//          element: <NewPostPage />,
//          action: newPostAction,
//        },
//      ],
//    },
//    {
//      path: '/newsletter',
//      action: newsletterAction,
//    },
//  ]);
