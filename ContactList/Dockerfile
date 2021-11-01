#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build

COPY . /app
WORKDIR /app
RUN pwd && ls -l && cd ClientApp/ && ls -l && cd build/ && ls -l
RUN dotnet restore "ContactList.csproj"
RUN dotnet build "ContactList.csproj" -c Release -o /app/build
FROM build AS publish
RUN dotnet publish "ContactList.csproj" -c Release -o /app/publish
FROM base AS final
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ContactList.dll"]
~
