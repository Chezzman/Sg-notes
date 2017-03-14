<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><%= title %></title>
  </head>
  <body>
    <% include ../partials/navigation %>
    <%# only use <%= the "=" when you want to substatute a value %>
    <h1><%= title %></h1>


        <ul>
         <% for (var i = 0; i < users.length; i++) { %>
           <li><a href="/users/<%= users[i].id%>"><%= users[i].firstName%> <%= users[i].lastName%> <%= users[i].email %></a></li>
          <% } %>
        </ul>

      </body>
    </html>
