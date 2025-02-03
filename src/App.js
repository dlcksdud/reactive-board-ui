import './App.css';

function App() {
  return (
    <div>
         <form id="listForm">
            <table>
                <thead>
                <tr>
                    <th>번호</th>
                    <th>SERVER_IP</th>
                    <th>DATABASE_TYPE</th>
                    <th>DATABASE_ID</th>
                    <th>REF_INFO</th>
                    <th>DATABASE_VERSION</th>
                    <th>DATABASE_USER_ID</th>
                </tr>
                </thead>
                <tbody id="tableBody">
                <tr th:each="user : ${userData}">
                    <td th:onclick="|location.href='/details/${user.num}'|">
                        <span th:text="${user.num}"></span>
                    </td>
                    <td th:onclick="|location.href='/details/${user.num}'|">
                        <span th:text="${user.SERVER_IP}"></span>
                    </td>
                    <td th:onclick="|location.href='/getOneUser/${user.num}'|">
                        <span th:text="${user.DATABASE_TYPE}"></span>
                    </td>
                    <td th:onclick="|location.href='/getOneUser/${user.num}'|">
                        <span th:text="${user.DATABASE_ID}"></span>
                    </td>
                    <td th:onclick="|location.href='/getOneUser/${user.num}'|">
                        <span th:text="${user.REF_INFO}"></span>
                    </td>
                    <td th:onclick="|location.href='/getOneUser/${user.num}'|">
                        <span th:text="${user.DATABASE_VERSION}"></span>
                    </td>
                    <td th:onclick="|location.href='/getOneUser/${user.num}'|">
                        <span th:text="${user.DATABASE_USER_ID}"></span>
                    </td>
                </tr>
                </tbody>
            </table>

            <button type="button" onclick="createUser()">사용자 생성</button>
        </form>
      
    </div>
  );
}

export default App;
