//ingresar la contraseña
const accesoAlFormulario = CryptoJS.SHA256('1234').toString();

// Función mostrar el contenedor de inicio y ocultar el otro
function showLoginContainer() {
    document.getElementById('loginContainer').classList.add('active');
    document.getElementById('userManagementContainer').classList.remove('active');
}

// Función mostrar el contenedor, usuarios y ocultar el de inicio
function showUserManagementContainer() {
    document.getElementById('loginContainer').classList.remove('active');
    document.getElementById('userManagementContainer').classList.add('active');
}

// validar inicio de secion 
function inicioDeSesion(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hashedPassword = CryptoJS.SHA256(password).toString();

    if (username === 'user1' && hashedPassword === accesoAlFormulario) {
        // Guardar el autenticación en localStorage
        localStorage.setItem('authenticated', 'true');
        showUserManagementContainer();
    } else {
        // Mostrar mensaje de error
        document.getElementById('message').innerText = 'Usuario o contraseña incorrectos';
    }
}

// funcion, formulario para crear nuevos usuarios
function nuevosUsuarios(event) {
    event.preventDefault(); 

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const newCorreo = document.getElementById('newCorreo').value;
    const hashedNewPassword = CryptoJS.SHA256(newPassword).toString();
    const hashedNewCorreo = CryptoJS.SHA256(newCorreo).toString();

    // Recuperar la lista de ya ingresados 
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: newUsername, password: hashedNewPassword, correo: hashedNewCorreo });

    // Guardar la lista actualizada
    localStorage.setItem('users', JSON.stringify(users));

    // Agregar el nuevo usuario a la tabla
    addRowToTable(newUsername, hashedNewPassword, newCorreo);

    // Limpiar el formulario
    document.getElementById('createUserForm').reset();
}

// agregar una fila a la tabla
function addRowToTable(username, password, correo) {
    const userTableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = userTableBody.insertRow();
    const usernameCell = newRow.insertCell(0);
    const passwordCell = newRow.insertCell(1);
    const correoCell = newRow.insertCell(2);
    const actionsCell = newRow.insertCell(3);

    usernameCell.textContent = username;
    passwordCell.textContent = password;
    correoCell.textContent = correo;

    //botones de editar y eliminar
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('btn-edit');
    editButton.onclick = () => editUser(username);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('btn-delete');
    deleteButton.onclick = () => deleteUser(newRow);

    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);
}

// Función para manejar el botón de editar
function editUser(username) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username);

    if (user) {
        document.getElementById('newUsername').value = user.username;
        document.getElementById('newPassword').value = CryptoJS.SHA256(user.password).toString(); 
        document.getElementById('newCorreo').value = user.correo;
        document.getElementById('createUserForm').removeEventListener('submit', nuevosUsuarios);
        document.getElementById('createUserForm').addEventListener('submit', () => updateUser(username));
    }
}

// Función formulario para actualizar usuario
function updateUser(originalUsername) {
    event.preventDefault(); 

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const newCorreo = document.getElementById('newCorreo').value;
    const hashedNewPassword = CryptoJS.SHA256(newPassword).toString();
    const hashedNewCorreo = CryptoJS.SHA256(newCorreo).toString();

    // Recuperar la lista de usuarios
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(user => user.username === originalUsername);

    if (userIndex > -1) {
        users[userIndex] = { username: newUsername, password: hashedNewPassword, correo: hashedNewCorreo };
        localStorage.setItem('users', JSON.stringify(users));
        reloadTable();
    }

    // Limpiar el formulario 
    document.getElementById('createUserForm').reset();
    document.getElementById('createUserForm').removeEventListener('submit', updateUser);
    document.getElementById('createUserForm').addEventListener('submit', nuevosUsuarios);
}

// Función eliminar un usuario
function deleteUser(row) {
    const username = row.cells[0].textContent;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(user => user.username !== username);
    localStorage.setItem('users', JSON.stringify(users));
    row.remove();
}

// Función  botón de "Salir"
function handleLogout() {
    // Eliminar de localStorage
    localStorage.removeItem('authenticated');
    showLoginContainer();
}

// Función para cargar el estado de la aplicación al inicio
function loadAppState() {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated === 'true') {
        showUserManagementContainer();
        reloadTable();
    } else {
        showLoginContainer();
    }
}

//recargar tabla de usuarios
function reloadTable() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userTableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    userTableBody.innerHTML = ''; // Limpiar la tabla existente

    users.forEach(user => {
        addRowToTable(user.username, user.password, user.correo);
    });
}

// Ejecutar la carga del estado de la aplicación al inicio
document.addEventListener('DOMContentLoaded', loadAppState);

//mejoradore de eventos
document.getElementById('loginForm').addEventListener('submit', inicioDeSesion);
document.getElementById('createUserForm').addEventListener('submit', nuevosUsuarios);
document.getElementById('logoutButton').addEventListener('click', handleLogout);
