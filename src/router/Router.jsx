<Routes>
  <Route index element={<HomePage />} />
  <Route path="/dashboard" element={<DashboardPage />} />
  <Route path="/auth" element={<AuthPage />} />
  <Route path="/admin" element={<AdminPage />} />
  <Route path="*" element={<PageNotFount />} />
</Routes>;
