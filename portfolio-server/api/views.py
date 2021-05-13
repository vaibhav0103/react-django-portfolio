from django.shortcuts import render
from datetime import datetime, timezone
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from contact.serializers import ContactSerializer
from contact.models import Contact
from football.models import Football
from football.serializers import FootballSerializer


# Contact Create Api View
class ContactCreateAPI(CreateAPIView):
    queryset         = Contact.objects.all()
    serializer_class = ContactSerializer

# Football Data Fetch View
class FootballApiView(APIView):
    
    def get(self, request, *args, **kwargs):
        try:
            lastid = Football.objects.latest('id').id
            if lastid:
                matchData = Football.objects.filter(id=lastid)
                isData = matchData.exists()
                '''
                    check date time in db is greater than current date time
                '''
                # diff = matchData[0].matchdate - datetime.now(timezone.utc).astimezone(tz=timezone.utc)
                
                if isData and (matchData[0].matchdate > datetime.now(timezone.utc).astimezone(tz=timezone.utc)):
                    data = {
                        'data': FootballSerializer(matchData, many=True).data,
                        'message': isData
                    }
                    return Response(data, status=status.HTTP_200_OK)
        except Football.DoesNotExist:
            lastid = None
            isData= False
            print("Not Exist")

        return Response(data = {"message": isData}, status=status.HTTP_200_OK)

# Create
class CreateFootballApiView(APIView):

    def post(self, request, *args, **kwargs):
        serializer = FootballSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data={'message': True}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)