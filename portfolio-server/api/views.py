from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from contact.serializers import ContactSerializer
from contact.models import Contact

# Create your views here.
class ContactCreateAPI(CreateAPIView):
    querset             = Contact.objects.all()
    serializer_class    = ContactSerializer